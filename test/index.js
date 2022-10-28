const _widgetStore = fc.widgetStore();

const targetId = fc.linkTarget.value[0][fc.linkTarget.value[0].length - 1];

const target = fc.utils.getWidgetById(targetId, _widgetStore.widgetList);

const subjects = fc.utils.getWidgetsByKey('subjects', _widgetStore.widgetList)[0];

const curSubject = subjects.options.advanced.cols.find(item => item.id === subjects.activeId);

console.log(curSubject,"===curSubject===",targetId)

const parentWidget = fc.utils.getWidgetsByKey('options', curSubject.widgetList)[0];

const newOrigin = _widgetStore.copyWidget({
    target,
    parentWidget,
    parentWidgetCid: 0
})
const number = fc.utils.getWidgetsByKey('number', [newOrigin])[0];
number.value = parentWidget.options.advanced.cols[0].widgetList.length