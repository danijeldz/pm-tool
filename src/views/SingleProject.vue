<template>
  <div class="single-project">
    <h1 class="subheading grey--text">Project: {{ project.title }}</h1>
    <v-container>
      <v-card tile>
        <v-card-title>{{ project.title }}</v-card-title>
        <v-card-subtitle>{{ project.person }}</v-card-subtitle>
        <v-card-text>{{ project.content }}</v-card-text>
        <v-card-actions>
          <v-btn class="success">Edit</v-btn>
          <v-btn class="warning">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "SingleProject",
  data() {
    return {
      project: {}
    };
  },
  created() {
    let ref = db
      .collection("projects")
      .where("slug", "==", this.$route.params.project_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.project = doc.data();
        this.project.id = doc.id;
      });
    });
  }
};
</script>

