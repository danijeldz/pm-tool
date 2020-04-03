<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{on}">
      <v-btn text class="success" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>
          <v-menu max-width="290">
            <template v-slot:activator="{on}">
              <v-text-field
                :value="formattedDate"
                label="Due date:"
                prepend-icon="date_range"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-btn text class="success mx-o mt-3" @click="submit">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
//import format from "date-fns/format";
import moment from "moment";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    }
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
    }
  }
};
</script>