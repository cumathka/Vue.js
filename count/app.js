const app = Vue.createApp({
    data() {
      return {
        results: [
          { name: 'result7', increment: 7, value: 0, display: '' },
          { name: 'result15', increment: 15, value: 0, display: '' },
          { name: 'result20', increment: 20, value: 0, display: '' },
          { name: 'result25', increment: 25, value: 0, display: '' },
          { name: 'result35', increment: 35, value: 0, display: '' }
        ]
      }
    },
    methods: {
      add(increment, resultName) {
        const result = this.results.find(r => r.name === resultName);
        if (result) {
          result.value += increment;
          result.display = this.createRhythmicSeries(result.value, increment);
        }
      },
      createRhythmicSeries(value, increment) {
        let series = [];
        for (let i = increment; i <= value; i += increment) {
          series.push(i);
        }
        return series.join('-');
      }
    }
  })
  
  app.mount("#events");
  