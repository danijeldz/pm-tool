<template>
  <div class="team">
    <h1 class="subheding grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, index) in team" :key="index">
          <v-card flat class="text-sm-center ma-3">
            <v-responsive>avatar goes here</v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer" },
        { name: "Ryu", role: "Graphic designer" },
        { name: "Chun Li", role: "Web developer" },
        { name: "Gouken", role: "Social media maverick" },
        { name: "Yoshi", role: "Sales guru" }
      ]
    };
  }
};
</script>

<style>
</style>