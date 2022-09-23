const _widgetStore = fc.widgetStore();
const _linkTarget = fc.linkTarget.value;

let _linkTargetId = null;
let _linkTargetParent = null;

if (_linkTarget.length === 1 && _linkTarget[0].length === 1) {
    _linkTargetId = _linkTarget[0][0];
    _linkTargetParent = _widgetStore.widgetList;
}

console.log(_linkTargetId, "===_linkTargetId===")
_widgetStore.copyWidget({
    target: fc.utils.getWidgetById(_linkTargetId, _widgetStore.widgetList),
    parentWidget: _linkTargetParent,
    ruleFormKey: 'option2'
});


