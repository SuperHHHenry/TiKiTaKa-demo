import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectMenuList, findMenuItem } from '@store/slices/menuSlice';

export const useSchema = () => {
  const [searchParams] = useSearchParams();
  const menuList = useSelector(selectMenuList);

  const [api, setApi] = useState(null);
  const [tableSchema, setTableSchema] = useState(null);
  const [tableConfig, setTableConfig] = useState(null);
  const [searchSchema, setSearchSchema] = useState(null);
  const [searchConfig, setSearchConfig] = useState(null);
  const [components, setComponents] = useState({});

  const buildTdoSchema = (_schema, comName) => {
    if (!_schema?.properties) { return; }
    const dtoSchema = {
      type: 'object',
      properties: {},
    };
    const { properties } = _schema;
    for (const key in properties) {
      const props = properties[key];
      if (props[`${comName}Option`]) {
        let dtoProps = {};
        // 提取 props 中非 option 部分，放到 dtoOption 中
        for (const pKey in props) {
          if (pKey.indexOf('Option') < 0) {
            dtoProps[pKey] = props[pKey];
          }
        }
        // 处理 comName 的 option 部分
        dtoProps = Object.assign({}, dtoProps, { option: props[`${comName}Option`] });

        // 处理 required 字段
        const { required } = _schema;

        if (required && Array.isArray(required) && required.length) {
          if (required.find(pk => pk === key)) {
            dtoProps.option.required = true;
          }
        }

        dtoSchema.properties[key] = dtoProps;
      }
    }
    return dtoSchema;
  };

  // 构造 schema 相关数据
  const buildData = () => {
    const key = searchParams.get('key');
    const siderKey = searchParams.get('siderKey');
    const menuItem = findMenuItem({ key: 'key', value: siderKey ?? key }, menuList);

    if (menuItem && menuItem.schemaConfig) {
      const { schemaConfig } = menuItem;
      const configSchema = JSON.parse(JSON.stringify(schemaConfig.schema));

      setApi(schemaConfig?.api || '');
      setTableSchema({});
      setTableConfig(undefined);
      setSearchSchema({});
      setSearchConfig(undefined);
      setComponents({});

      // 使用 setTimeout 模拟 Vue 的 nextTick
      setTimeout(() => {
        // 构造 tableSchema tableConfig
        const newTableSchema = buildTdoSchema(configSchema, 'table');
        setTableSchema(newTableSchema);
        setTableConfig(schemaConfig?.tableConfig);

        // 构造 searchSchema searchConfig
        const dtoSearchSchema = buildTdoSchema(configSchema, 'search');
        for (const key in dtoSearchSchema.properties) { // 处理默认值，有些页面跳转时带参数。
          if (searchParams.get(key) !== null) {
            dtoSearchSchema.properties[key].option.value = searchParams.get(key);
          }
        }
        setSearchSchema(dtoSearchSchema);
        setSearchConfig(schemaConfig?.searchConfig);

        // 构造 components = { comKey: { schema, config } }
        const { componentConfig } = schemaConfig;
        if (componentConfig && Object.keys(componentConfig).length) {
          const dtoComponents = {};
          for (const comName in componentConfig) {
            dtoComponents[comName] = {
              schema: buildTdoSchema(configSchema, comName),
              config: componentConfig[comName],
            };
          }
          setComponents(dtoComponents);
        }
      }, 0);
    }
  };

  useEffect(() => {
    buildData();
  }, [searchParams.get('key'), searchParams.get('siderKey'), menuList]);

  return {
    api,
    tableSchema,
    tableConfig,
    searchSchema,
    searchConfig,
    components,
  };
};

export default useSchema; 