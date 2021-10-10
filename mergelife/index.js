alert("Welcome to the Interactive Evolution of Artificial Life Art Project. Then the 8 initial images will appear.");

alert("Please choose the most appealing image for you within the 8 sets of images. Kindly choose one continuously within 10 sets.");

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var hexArray = [
    "e542-5f79-9341-f31e-6c6b-7f08-8773-7068",
    "a07f-c000-0000-0000-0000-0000-ff80-807f",
    "6eb6-ba3d-70b4-ac6f-baae-2604-8529-8998",
    "ea44-55df-9025-bead-5f6e-45ca-6168-275a",
    "7b58-f7b4-c5b4-fd87-22fa-eb10-6de8-107c",
    "6eb6-ba3d-70b4-ac6f-baae-2604-8529-8998",
    "1c48-9004-8831-41be-2804-8f50-9901-db18",
    "df1d-bba1-8e06-aa66-48ff-7414-6a2f-6237",
    "6769-5dd6-7d03-564e-a5ec-cae2-54c4-810c",
    "cb97-6a74-88c0-28aa-1b6a-834b-4fe8-60ac",
    "6007-7d42-05e5-1b9b-2899-e043-1cd4-2f7b",
    "dfda-67af-bc97-7ef6-be98-42d9-9147-97d3",
    "f81b-38d1-7f60-62ad-850b-2085-ddff-8154",
    "548c-aac9-97d2-b8dd-1425-88c1-599d-78e2",
    "8501-677e-655f-236e-53ba-d52d-8cf1-1e46",
    "5688-0f6c-6619-8605-d7e4-4074-de2e-96c8",
    "c168-7b61-b5cc-4e64-8f7a-df90-5362-8750",
    "5eb3-2d3b-df40-ee83-e472-60c3-3342-48be",
    "5a3d-45de-96fd-de64-ecf9-77c1-8461-9c8c",
    "2085-c66a-84d8-fbE8-b3c0-70e4-0e2e-799c",
    "5a55-983c-daad-60f5-2969-3077-90e7-9188",
    "6da1-0852-5e0f-2Ad9-c902-f8a0-78fd-4473",
    "a45d-d552-3331-a34f-890a-bb71-64e2-c4f0",
    "d106-f969-cda8-ceb6-9964-977c-cc43-62b1",
    "2152-9b71-abb7-162a-45ff-dd03-fe15-957e",
    "2152-9b71-bbc7-162a-c5ff-ad03-fd65-957e",
    "4d56-d1e3-4acb-60d6-5e2f-5fbf-33ad-e266",
    "7b58-f7b4-a5b4-fd87-22fa-eb12-6de8-107f",
    "bf51-3628-3bcf-1ee1-5b18-7b95-7898-6a9a",
    "ef12-d680-9430-8853-a368-55f9-7451-7c44",
    "8d74-5644-72ff-a100-13ec-1319-c92a-2c2f",
    "fd65-31da-3976-2079-88a7-ffae-1c53-e6e5",
    "cf8d-c429-9534-218a-6f89-2ce5-a6a1-cc48",
    "2c64-2075-e5bb-f52d-ce41-8bb0-bbc6-82f3",
    "2dbe-e0b9-1128-fc6d-ebfb-6d00-c067-af0a",
    "7f22-e958-c7be-1077-2f79-2959-65f0-bb6d",
    "4b76-e4d6-3304-6e49-2c30-8bb3-a3da-fc15",
    "58dc-d8b6-093a-fa51-9716-b4b6-8e95-ecf9",
    "1cbf-a3e8-fd91-da66-ace5-99da-eb7f-7dc6",
    "721d-b0a8-20ec-1117-58a2-937b-4e16-c65d",
    "8558-6afc-dd06-6675-6a02-225f-e227-854c",
    "7cc3-6c35-307c-7f45-2982-5813-04b1-5bd2",
    "d41d-6e48-3f2a-d425-be7d-ce09-9ae2-5b0d",
    "aad9-ae75-57a8-f7ca-5d23-177e-a27a-7ce5",
    "2bf1-d16c-e8c3-fc9c-f7a0-9485-8cd4-7e13",
    "3609-ed9c-df5b-3912-e504-a118-27fd-fe37",
    "5fb7-a3b4-72c9-c9f7-bdc6-c9e3-cc72-bb34",
    "3b92-09e5-25c4-8884-7afc-1c88-87c5-bffe",
    "816f-2bf6-e2b6-249d-ddc9-f474-f841-6a7e",
    "3277-9d24-f179-53f4-be75-f943-efba-e82e",
    "08ce-85e9-d3e6-dd35-1298-f018-ab01-46a4",
    "f967-77d3-416e-c1c6-45c8-b0f6-4576-1ffd",
    "d483-b68f-958c-b4cb-8783-fdb7-62ae-6d29",
    "0f12-36d2-4041-93f6-9698-8d2a-6188-efe7",
    "d7ae-f945-c6eb-c402-82bd-c5a8-9db4-c8c0",
    "8d51-0c9e-a310-9ada-65c1-1d02-57d9-d3d8",
    "f6a9-d552-6aab-9385-c1c5-7059-4db7-fe41",
    "4648-435f-bb41-fec5-8c45-56fc-efbe-6709",
    "c0d9-6c68-c35c-060d-a046-4d4c-a5d4-8a4c",
    "b64c-7fcd-ac99-6803-abb5-f45a-a8f3-68bf",
    "805b-77c5-2dc0-a265-b95e-1394-39e8-7b52",
    "4df4-6bb7-be1c-57ed-79f8-ebc6-6af1-2fb3",
    "f251-4bbe-ba8b-a879-fbed-5e56-0d10-894a",
    "61a9-eba1-64c1-72fd-29e7-f278-07fb-8d5a",
    "9612-2089-e7b0-0539-ffaa-dbcd-87e7-26f5",
    "6e8a-746f-3323-9a36-e383-0a8e-053a-66e8",
    "4968-54d3-3753-f5f1-b943-2e6d-f240-0dbd",
    "2de6-514b-4d58-6f0e-9370-2352-68de-6b78",
    "66c8-8ab4-5907-694c-0a35-d3b0-5121-98ef",
    "05bf-70b2-cb6c-5c79-2cc8-33c1-f35b-90b9",
    "0742-9bf7-7975-94ea-cf51-87a0-2528-ad2d",
    "9719-66e9-0cb2-9f98-a16a-3ef6-aa85-41ab",
    "342d-b48d-a06d-5505-702f-5221-9f02-da34",
    "071c-17b8-0799-c0dc-3690-d9f3-5868-85b4",
    "c297-1a4c-e995-fc38-b45d-03e5-931d-8689",
    "fdb6-e912-419f-ba1c-baea-e85e-c41d-c078",
    "6e45-64d9-f7c1-cae1-0045-fbc0-b61f-08b4",
    "6c30-d0ac-e245-ff34-a1e9-7a6d-aa3b-2953",
    "5ed7-a8d8-5962-6ae0-3344-88ca-d524-1c28",
    "8abe-a576-ff80-7ed5-44f2-3245-c171-51ec"    
]

shuffle(hexArray);

var value1 = hexArray.pop();
var value2 = hexArray.pop();
var value3 = hexArray.pop();
var value4 = hexArray.pop();
var value5 = hexArray.pop();
var value6 = hexArray.pop();
var value7 = hexArray.pop();
var value8 = hexArray.pop();

const canvas1 = document.getElementById('canvas-1')
window.ml1 = new MergeLifeRender()
window.ml1.init({rule: value1, canvas: canvas1, cellSize: 2, controls: false, resetCount: 1000})
window.ml1.startAnimation()

const canvas2 = document.getElementById('canvas-2')
window.ml2 = new MergeLifeRender()
window.ml2.init({rule: value2, canvas: canvas2, cellSize: 2, controls: false, resetCount: 1000})
window.ml2.startAnimation()

const canvas3 = document.getElementById('canvas-3')
window.ml3 = new MergeLifeRender()
window.ml3.init({rule: value3, canvas: canvas3, cellSize: 2, controls: false, resetCount: 1000})
window.ml3.startAnimation()

const canvas4 = document.getElementById('canvas-4')
window.ml4 = new MergeLifeRender()
window.ml4.init({rule: value4, canvas: canvas4, cellSize: 2, controls: false, resetCount: 1000})
window.ml4.startAnimation()

const canvas5 = document.getElementById('canvas-5')
window.ml5 = new MergeLifeRender()
window.ml5.init({rule: value5, canvas: canvas5, cellSize: 2, controls: false, resetCount: 1000})
window.ml5.startAnimation()

const canvas6 = document.getElementById('canvas-6')
window.ml6 = new MergeLifeRender()
window.ml6.init({rule: value6, canvas: canvas6, cellSize: 2, controls: false, resetCount: 1000})
window.ml6.startAnimation()

const canvas7 = document.getElementById('canvas-7')
window.ml7 = new MergeLifeRender()
window.ml7.init({rule: value7, canvas: canvas7, cellSize: 2, controls: false, resetCount: 1000})
window.ml7.startAnimation()

const canvas8 = document.getElementById('canvas-8')
window.ml8 = new MergeLifeRender()
window.ml8.init({rule: value8, canvas: canvas8, cellSize: 2, controls: false, resetCount: 1000})
window.ml8.startAnimation()

function refreshCanvas(selected) {
    if(hexArray.length < 8) {
        alert("Selected: " + selected);
        return;
    }

    value1 = hexArray.pop();
    value2 = hexArray.pop();
    value3 = hexArray.pop();
    value4 = hexArray.pop();
    value5 = hexArray.pop();
    value6 = hexArray.pop();
    value7 = hexArray.pop();
    value8 = hexArray.pop();

    window.ml1.init({rule: value1, canvas: canvas1, cellSize: 2, controls: false, resetCount: 1000});
    window.ml1.startAnimation();

    window.ml2.init({rule: value2, canvas: canvas2, cellSize: 2, controls: false, resetCount: 1000});
    window.ml2.startAnimation();

    window.ml3.init({rule: value3, canvas: canvas3, cellSize: 2, controls: false, resetCount: 1000});
    window.ml3.startAnimation();

    window.ml4.init({rule: value4, canvas: canvas4, cellSize: 2, controls: false, resetCount: 1000});
    window.ml4.startAnimation();

    window.ml5.init({rule: value5, canvas: canvas5, cellSize: 2, controls: false, resetCount: 1000});
    window.ml5.startAnimation();

    window.ml6.init({rule: value6, canvas: canvas6, cellSize: 2, controls: false, resetCount: 1000});
    window.ml6.startAnimation();

    window.ml7.init({rule: value7, canvas: canvas7, cellSize: 2, controls: false, resetCount: 1000});
    window.ml7.startAnimation();

    window.ml8.init({rule: value8, canvas: canvas8, cellSize: 2, controls: false, resetCount: 1000});
    window.ml8.startAnimation();

};

canvas1.addEventListener("click", function(event) {
    refreshCanvas(value1);
});

canvas2.addEventListener("click", function(event) {
    refreshCanvas(value2);
});

canvas3.addEventListener("click", function(event) {
    refreshCanvas(value3);
});

canvas4.addEventListener("click", function(event) {
    refreshCanvas(value4);
});

canvas5.addEventListener("click", function(event) {
    refreshCanvas(value5);
});

canvas6.addEventListener("click", function(event) {
    refreshCanvas(value6);
});

canvas7.addEventListener("click", function(event) {
    refreshCanvas(value7);
});

canvas8.addEventListener("click", function(event) {
    refreshCanvas(value8);
});