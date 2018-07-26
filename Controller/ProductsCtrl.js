module.exports={
    create: (req, res)=>{ 
        const db = req.app.get('db'); 
        const {name, description, price, imageurl} = req.body;
        db.create_product([name, description, price, imageurl])
        .then(result=> res.send(result))
        .catch(err=>{
            res.status(500).send({errorMessage: "No good"  })
    })
},

    readOne: (req, res)=>{ 
        const db = req.app.get('db'); 
        const {id}=req.params;
        db.read_product(id)
        .then(result=> {
            // console.log(result)
            res.send(result)
        })
        .catch( err=> {
            res.status(500).send({errorMessage: "No good"  })
    })
    },

    readAll: (req, res)=>{ 
        const db = req.app.get('db'); 
        
        db.read_products()
        .then(result=> res.send(result))
        .catch( err=> {
            res.status(500).send({errorMessage: "No good"  })
    })
    },

    update: (req, res)=>{ 
        const db = req.app.get('db'); 
        const { id } = req.params;
        // console.log(req.query)
        const {desc}= req.query;
        db.update_product([id, desc])
        .then(result=> res.send(result))
        .catch( err=> {
            res.status(500).send({errorMessage: "No good"  })
    })
    },

    delete: (req, res)=>{ 
        const db = req.app.get('db'); 
        const { id } = req.params;
        db.delete_product(id)
        .then(result=> res.send(result))
        .catch( err=> {
            res.status(500).send({errorMessage: "No good"  })
    })
    }
}