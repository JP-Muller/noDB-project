let id = 5

let list = [
    {
        id: 1,
        date: 'Mon June 3 2019',
        accTasks: ['Start DevMountain', 'Unpack', 'Study GitHub', 'Sleep'],
        thought: 'Today was great, I started DevMountain and made some new friends.'
    },
    {
        id: 2,
        date: 'Thurs June 6 2019',
        accTasks: ['Learn JavaScript', '40 push-ups', 'Buy a bike'],
        thought: 'Today was cool, I learned a lot about JavaScript! I also had to buy a bike, but it will be well worth it.'
    },
    {
        id: 3,
        date: 'Fri June 14 2019',
        accTasks: ['Learn HTML', 'Bike to grocery store'],
        thought: 'Today was great, I learned a lot about HTML!'
    },
    {
        id: 4,
        date: 'Fri June 28 2019',
        accTasks: ['Study express endpoints', 'Kill it', 'Kill it with fire'],
        thought: 'Today was a good day. I made more progress on my noDb project.'
    }

]

module.exports = {
    dailyEntries(req, res) {
        console.log('hit dailyEntries data')
        res.status(200).send(list)
    },

    updateItem(req, res) {

    },

    addItem(req, res) {
        console.log('hit addItem')
        const { date, accTasks, thought } = req.body

        let newEntry = {
            id,
            date,
            accTasks,
            thought,
        }

        list.push(newEntry)
        id++

        res.status(200).send(list)
    },

    updateEntry(req,res) {
        console.log('hit update')
        const {id} = req.params
        const {accTasks, thought} = req.body

        let index = list.findIndex(list === list.id === +id)

        let updatedEntry = {
            accTasks,
            thought
        }
        list[index] = {...list[index], ...updatedEntry}
    },

    deleteEntry(req, res) {
       console.log('hit delete')
       let {id} = req.params
       console.log({id})
    //    for(let i = 0; i < list.length; i++){
    //        if(list[i].id === +id){
        let index = list.findIndex(list => list.id === +id);
    index !== -1 && list.splice(index, 1);
            res.status(200).send(list)
           }
           
       }

       

       

    
