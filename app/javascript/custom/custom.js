import * as FilePond from "filepond";
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

const fileField = document.querySelector(".filepond");

FilePond.registerPlugin(FilePondPluginImagePreview);

const pond = FilePond.create(fileField,{
    credits: {},
    storeAsFile: true,
    allowMultiple: true,
    allowReorder: true
});