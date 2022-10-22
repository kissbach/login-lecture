'use strict';

const users = {
    id : ["kim", "lim", "lee", "park"],
    psword : ["1234","1234","1234","1234"],
}


const output = {
    home : (req,res)=>{
        res.render("home/index")
    },



login : (req,res)=>{
        res.render("home/login")
    },
}

const process = {
    login : (req,res) => {
        const id =  req.body.id;
        const psword = req.body.psword;

        console.log(id, psword)

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            console.log(idx)
            if(users.psword[idx] === psword) {
                console.log(users.psword[idx]) 
                console.log("로그인 성공")
                return res.json( {
                    success : true,
                });
            }
        }

        console.log("로그인 실패")
        return res.json( {
            success : false,
            msg : "로그인에 실패하셨습니다.",
        });

    }
}




module.exports = {
    output,
    process,
}