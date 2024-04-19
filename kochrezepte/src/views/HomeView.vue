<template>
 <RecipeItem 
 :label="recipe.recipe.label"
 :attributes = "recipe.recipe.dietLabels.join(', ')"
 :url = "recipe.recipe.url"
 :image="recipe.recipe.image" v-for="recipe in recipes"/>
</template>

<script>
import RecipeItem from "@/components/RecipeItem.vue"
export default {
  components :{
    RecipeItem
  },
  data() {
    return {
      recipes: []
    }
  },
  methods : {
    async getRecipes(){
      const query = 'curry';
      const appId = 'b3b90a44';
      const appKey = '2f8faae30be931cfdc1d6ec0db6213d7';
      const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
      let resp = await fetch(url);
      this.recipes = (await resp.json()).hits;
      console.log(this.recipes);
    }
  },
  mounted(){
    this.getRecipes();
}}


</script>
