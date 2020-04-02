<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{on}">
      <v-btn text class="success" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add new project</h2>
      </v-card-title>
      <v-card-text>Here goes form</v-card-text>
      <v-card-divider></v-card-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Add project</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>