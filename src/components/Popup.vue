<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{on}">
      <v-btn text class="success" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
          <v-menu max-width="290">
            <template v-slot:activator="{on}">
              <v-text-field
                :value="formattedDate"
                label="Due date:"
                prepend-icon="date_range"
                v-on="on"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn text class="success mx-o mt-3" @click="submit" :loading="loading">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
//import format from "date-fns/format";
import moment from "moment";
import db from "@/firebase/init";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [
        v => v.length >= 3 || "Minimum length of the text is 3 characters."
      ],
      loading: false,
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          dueDate: moment(this.due).format("Do MMMM YYYY"),
          person: "Danijel",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            console.log("added to db");
            this.loading = false;
            this.dialog = false;
          });
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
    }
  }
};
</script>