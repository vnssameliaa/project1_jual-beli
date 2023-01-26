const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database :"jual_beli_barang"
})

db.connect(error =>{
    if(error){
        console.log(error.message)
    }else{
        console.log("MySQL Connected")
    }
})


//data pelanggan
app.get("/pelanggan",(req,res)=>{   //mengambil data
    
    let sql = "select*from data_pelanggan"

    db.query(sql,data, (error, result)=>{
        let response = null
        if (error){
            response={
                message:error.message
            }
        } else {
                response = {
                    count : result.length,
                    data_pelanggan:result
                }
            }
            res.json(response)
    })
})

app.get("/pelanggan",(req,res)=>{   //mengambil data
    let data = {
      id_pelanggan:req.params.id
    }
    let sql = "select*from data_pelanggan where?"

    db.query(sql,data, (error, result)=>{
        let response = null
        if (error){
            response={
                message:error.message
            }
        } else {
                response = {
                    count : result.length,
                    data_pelanggan:result
                }
            }
            res.json(response)
    })
})

app.post("/pelanggan", (req,res)=>{     //menyimpan data
    let data = {
        nama_pelanggan: req.body.nama_pelanggan,
        alamat: req.body.alamat
    }
    let sql= "insert into data_pelanggan set?"

    db.query(sql,data,(error, result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data inserted"
            }
        }
        res.json(response)
    })
})

app.put("/pelanggan", (req,res)=>{       //mengubah data/edit
    let data =[
        {
        nama_pelanggan: req.body.nama_pelanggan,
        alamat: req.body.alamat
        },
        {
        id_pelanggan: req.body.id_pelanggan
        }
    ]
    let sql = "update data_pelanggan set ? where?"

    db.query(sql, data, (error,result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data inserted"
            }
        }
        res.json(response)
    })
})

app.delete("/pelanggan/:id",(req,res)=>{          //menghapus data
    let data ={
        id_pelanggan: req.params.id
    }
    let sql = "delete from data_pelanggan where?"

    db.query(sql, data, (error, result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data deleted"
            }
        }
        res.json(response)
    })
})


//data barang 
app.get("/barang",(req,res)=>{   //mengambil data
    
    let sql = "select*from data_barang"

    db.query(sql,data, (error, result)=>{
        let response = null
        if (error){
            response={
                message:error.message
            }
        } else {
                response = {
                    count : result.length,
                    data_barang:result
                }
            }
            res.json(response)
    })
})

app.get("/barang/:id",(req,res)=>{
    let data = {
      id_barang:req.params.id
    }
    let sql = "select*from data_barang where?"

    db.query(sql,data, (error, result)=>{
        let response = null
        if (error){
            response={
                message:error.message
            }
        } else {
                response = {
                    count : result.length,
                    data_barang:result
                }
            }
            res.json(response)
    })
})

app.post("/barang", (req,res)=>{
    let data = {
        kondisi_barang: req.body.kondisi_barang,
        nama_barang: req.body.nama_barang,
        stok: req.body.stok
    }
    let sql= "insert into data_barang set?"

    db.query(sql,data,(error, result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data inserted"
            }
        }
        res.json(response)
    })
})

app.put("/barang", (req,res)=>{
    let data =[
        {
        kondisi_barang: req.body.kondisi_barang,
        nama_barang: req.body.nama_barang,
        stok: req.body.stok
        },
      { id_barang: req.body.id_barang
         }
    ]
    let sql = "update data_barang set ? where?"

    db.query(sql, data, (error,result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data inserted"
            }
        }
        res.json(response)
    })
})

app.delete("/barang/:id",(req,res)=>{
    let data ={
        id_barang: req.params.id_barang
    }
    let sql = "delete from data_barang where?"

    db.query(sql, data, (error, result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data deleted"
            }
        }
        res.json(response)
    })
})


//data admin
app.get("/admin",(req,res)=>{   //mengambil data
    
    let sql = "select*from data_admin"

    db.query(sql,data, (error, result)=>{
        let response = null
        if (error){
            response={
                message:error.message
            }
        } else {
                response = {
                    count : result.length,
                    data_admin : result
                }
            }
            res.json(response)
    })
})

app.get("/admin",(req,res)=>{
    let data = {
      id_admin:req.params.id
    }
    let sql = "select*from data_admin where?"

    db.query(sql,data, (error, result)=>{
        let response = null
        if (error){
            response={
                message:error.message
            }
        } else {
                response = {
                    count : result.length,
                    data_admin:result
                }
            }
            res.json(response)
    })
})

app.post("/admin", (req,res)=>{
    let data = {
        nama_admin: req.body.nama_admin,
        status_admin: req.body.status_admin
    }
})
    let sql = "insert into data_admin set ?"

    db.query(sql,data,(error,result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data inserted"
            }
        }
        res.json(response)
    })

app.put("/admin", (req,res)=>{
    let data =[
        {
        nama_admin: req.body.nama_admin,
        status_admin: req.body.status_admin
        },
    {
        id_admin: req.body.id_admin
        }
]
    let sql = "update data_admin set? where?"

    db.query(sql, data, (error,result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data inserted"
            }
        }
        res.json(response)
    })
})

app.delete("/admin/:id",(req,res)=>{
    let data ={
        id_admin: req.params.id_admin
    }
    let sql = "delete from data_admin where?"

    db.query(sql, data, (error, result)=>{
        let response = null
        if (error){
            response = {
                message: error.message
            }
        }else{
            response = {
                message: result.affectedRows+"data deleted"
            }
        }
        res.json(response)
    })
})


app.listen(8000, ()=>{
    console.log("xixi")
})
