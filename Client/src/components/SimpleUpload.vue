<template>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">

        <div v-if="message"
        :class="`message ${error ? 'is-danger' : 'is-success'}`">
        <div class="message-body">{{message}}</div>
        </div>

        <div class="field">
            <div class="file is-boxed is-primary is-centered">
                <label class="file-label">
                    <input
                    type="file"
                    ref="file"
                    @change="selectFile"
                    class="file-input"
                    />
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Choose a file...
                        </span>
                    </span>

                    <span v-if="file" class="file-name">{{file.name}}</span>
                </label>
            </div>

        </div>

        <div class="field">
            <button class="button is-info is-centered"> Send </button>
        </div>

    </form>
</template>

<script>
import axios from 'axios';

export default{
    name: "SimpleUpload",
    data () {
        return {
            file: "",
            message: "",
            error: false
        }
    },
    methods: {
        selectFile() {
            const file = this.$refs.file.files[0];
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            const MAX_SIZE = 200000;
            const tooLarge = file.size > MAX_SIZE;

            if(allowedTypes.includes(file.type) && !tooLarge) {
                this.file = file;
                this.error = false;
                this.message ="";
            }else {
                this.error = true;
                this.message = tooLarge ? `Too Large. Max size is ${MAX_SIZE/1000}Kb` : "Only images are allowed";
            }
        },
        async sendFile() {
            const formData = new FormData();
            formData.append('file', this.file);
            try {
                await axios.post('./upload', formData);
                this.message = "File has been uploaded";
                this.file = "";
                this.error = false;
            } catch(err) {
                console.log(err);
                this.message = "File was too big or not the correct file type.";
                this.error = true;
            }
        }
    }
}
</script>

<style scoped>
.file-name {
    color: gray;
}
</style>
