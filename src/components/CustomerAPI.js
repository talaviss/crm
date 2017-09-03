const CustomerAPI = {
  customers: [
    { number: 1, name: "Ben Cohen", position: "G" },
    { number: 2, name: "Dave Avissar", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Fillipe Forward", position: "F" }
  ],
  all: function() { return this.customers},
  get: function(id) {
    const isCustomer = p => p.number === id
    return this.players.find(isCustomer)
  }
}
