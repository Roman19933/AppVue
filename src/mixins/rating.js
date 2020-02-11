export default {
    methods: {
        getArrayRating:function(){
          if(this.getFeedbacks().length) {
            return this.getFeedbacks().map(item => {
              return item.rating
            })
          } else {
            return 1
          }
        },
        getSumRating:function() {
          if(this.getArrayRating() !==1) {
            return this.getArrayRating().reduce((total,rating) => (total + rating))
          } else {
            return 0
          }
        },
        getEndRating:function(){
          if(this.getSumRating() !==0) {
            return Math.round(this.getSumRating()/this.getArrayRating().length)
          } else {
            return Math.round(this.getSumRating()/this.getArrayRating())
          }
        }
    }
}