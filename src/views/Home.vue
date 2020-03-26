<template>
  <div class="home">
    <h1>Homepage</h1>
    <h2>Text classes</h2>
    <p
      class="red white--text"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores, possimus pariatur neque, libero eligendi non fugit earum ipsam est doloremque. Quia in accusantium autem necessitatibus incidunt corrupti cumque ipsam.</p>
    <p
      class="pink lighten-4 red--text text--darken-4"
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos non at sit necessitatibus adipisci, quis accusamus, ut sequi, qui harum facere quam veritatis exercitationem numquam temporibus excepturi. Architecto, ipsam repellendus.</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller display</h4>
    <p class="headline">THis is a headline</p>
    <p class="subheading font-weight-bold">This is a subheading</p>
    <p class="caption">THis is a caption</p>

    <h2>Button classes and props</h2>
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn depressed color="pink">Click me - depressed</v-btn>
    <v-btn text color="pink">click me - flat</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon small left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>email me</span>
      <v-icon large right>mdi-email</v-icon>
    </v-btn>

    <v-btn depressed fab small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <h2>Breakpoints and visibility</h2>
    <p>button hidden for medium and smaller screens</p>
    <v-btn class="hidden-md-and-down">Click me</v-btn>

    <p>button hidden for medium and bigger screens</p>
    <v-btn class="hidden-md-and-up">Click me</v-btn>

    <p>button hidden for small screens only</p>
    <v-btn class="hidden-sm-only">Click me</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
