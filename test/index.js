const _widgetStore = widgetStore();
const target = _widgetStore.widgetList[0].options.advanced.cols[0].widgetList[3];
const parentWidget = _widgetStore.widgetList[0].options.advanced.cols[0].widgetList;
  _widgetStore.copyWidget(target,parentWidget);