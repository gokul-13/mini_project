const validateRegNo=(reg_no,len) =>{
    console.log("called:"+reg_no.length);
    if(reg_no.length!==len) return false;
    for(let i=0;i<reg_no.length;i++) {
        console.log(reg_no[i]);
        if(reg_no[i]<'0' || reg_no[i]>'9') {
            return false;
        }
    }
    return true;
}

const validateName=(name)=>{
    console.log("called:"+name.length);
    for(let i=0;i<name.length;i++) {
        console.log(name[i]);
        if((name[i]>='a'  && name[i]<='z') || (name[i]>='A'  && name[i]<='Z') || name[i]===' ') {}
        else return false;
    }
    return true;
}

const validateEmail=(email) => {
    console.log("called:"+email.length);
    let dot=false;
    let at=false;
    for(let i=0;i<email.length;i++) {
        //console.log(name[i]);
        if((email[i]==='@')) {at=true;}
        if((email[i]==='.')) {dot=true;}
    }
    if(at && dot) return true;
    else return false;
}

module.exports.validateEmail=validateEmail;
module.exports.validateName=validateName;
module.exports.validateRegNo=validateRegNo;