import * as FilePond from "filepond";

const fileField = document.querySelector(".filepond");

const pond = FilePond.create(fileField,{
    credits: {},
    storeAsFile: true,
    allowMultiple: true
});