const _widgetStore = fc.widgetStore();

const targetId = fc.linkTarget.value[0][fc.linkTarget.value[0].length-1];

fc.utils.getWidgetById(targetId,_widgetStore.widgetList);