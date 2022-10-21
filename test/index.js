function getElementsByAttr(attr, stage) {
    let stack = [stage];
    let target = [];
    while (stack.length) {
      let node = stack.pop();
      if (node.customAttrName === attr) {
        target.push(node);
      }
      stack.push(...(node.children || []))
    }
    return target;
}

var a =  {
    "originWidth": 1920,
    "originHeight": 1080,
    "windowPercent": "16:9",
    "_backgroundImgId": 18,
    "answer": [],
    "dom": [],
    "type": 1,
    "conName": "Stage",
    "id": 1,
    "name": "stage",
    "alias": "StageAlias",
    "visible": true,
    "interactive": true,
    "props": {
        "canBeDisabled": true,
        "disabled": false
    },
    "edit": {
        "select": true,
        "delete": true,
        "copy": true,
        "editText": true,
        "changeFile": true,
        "move": true
    },
    "componentType": "",
    "questionDescribe": {},
    "content": {
        "click": "",
        "hover": "",
        "default": 18
    },
    "customAttrName": "START",
    "alpha": 1,
    "transform": [
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0
    ],
    "children": [
        {
            "type": 4,
            "conName": "Sprite",
            "id": 3,
            "name": "图片_3",
            "alias": "图片_3",
            "visible": true,
            "interactive": true,
            "props": {
                "startAudio": {
                    "id": 206,
                    "isResourceId": true
                }
            },
            "edit": {
                "select": true,
                "delete": false,
                "copy": false,
                "editText": true,
                "changeFile": true,
                "move": true
            },
            "componentType": "",
            "questionDescribe": {},
            "content": {
                "click": "",
                "hover": "",
                "default": 20
            },
            "customAttrName": "audioBtn",
            "alpha": 1,
            "transform": [
                823.03,
                766.57,
                1,
                1,
                0,
                0,
                0,
                0,
                0
            ],
            "children": []
        },
        {
            "type": 15,
            "conName": "Button",
            "id": 4,
            "name": "按钮p_4",
            "alias": "按钮p_4",
            "visible": true,
            "interactive": true,
            "props": {
                "audioBgDefault": {
                    "isResourceId": true,
                    "id": 197,
                    "fileName": "上传成功"
                }
            },
            "edit": {
                "select": true,
                "delete": true,
                "copy": true,
                "editText": true,
                "changeFile": true,
                "move": true
            },
            "componentType": "",
            "questionDescribe": {},
            "content": {
                "default": 22,
                "hover": "",
                "click": 24
            },
            "customAttrName": "audioBtn",
            "alpha": 1,
            "transform": [
                1720.33,
                65.37,
                1,
                1,
                0,
                0,
                0,
                0,
                0
            ],
            "children": []
        }
    ]
}

getElementsByAttr('audioBtn', a)