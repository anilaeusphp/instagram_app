import * as FilePond from "filepond";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';



function loadFilePond(){
    const fileField = document.querySelector(".filepond");

    FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);


    const pond = FilePond.create(fileField,{
        credits: {},
        storeAsFile: true,
        allowMultiple: true,
        allowReorder: true,
        acceptedFileTypes: ["image/*"]
    });
}

document.addEventListener("turbo:load", loadFilePond);