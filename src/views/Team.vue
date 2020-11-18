<template>
	<div class="team">
		<h1 class="subheding grey--text">Team</h1>
		<v-container class="my-5">
			<v-layout row wrap>
				<v-flex
					xs12
					sm6
					md4
					lg3
					v-for="(person, index) in team"
					:key="index"
				>
					<v-card text class="text-sm-center ma-3">
						<v-responsive class="pt-4">
							<v-avatar size="100" class="grey lighten-2">
								<img :src="person.avatar" alt />
							</v-avatar>
						</v-responsive>
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
				{
					name: "John Doe",
					role: "Web developer",
					avatar: "/male3.svg",
				},
				{
					name: "Gina G",
					role: "Graphic designer",
					avatar: "/female1.svg",
				},
				{
					name: "George Porge",
					role: "Web developer",
					avatar: "/supportmale.svg",
				},
				{
					name: "Kim Clark",
					role: "Social media manager",
					avatar: "/female2.svg",
				},
				{
					name: "Robert Zweistein",
					role: "CEO",
					avatar: "/albert.svg",
				},
			],
		};
	},
};
</script>

<style>
</style>