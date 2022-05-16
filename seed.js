const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try{
        const woopa1= await prisma.missioncommander.upsert({
            where: {name: 'Woopa1'},
            update:{},
            create:{
                name:"Woopa1",
                username:"Ajolonauta 1",
                mainStack:"Node"
            }
        });
        const woopa2= await prisma.missioncommander.upsert({
            where: {name: 'Woopa1'},
            update:{},
            create:{
                name:"Woopa2",
                username:"Ajolonauta 2",
                mainStack:"Node"
            }
        });
        const woopa3= await prisma.missioncommander.upsert({
            where: {name: 'Woopa3'},
            update:{},
            create:{
                name:"Woopa3",
                username:"Ajolonauta 3",
                mainStack:"Node"
            }
        });
        const woopa4= await prisma.missioncommander.upsert({
            where: {name: 'Woopa4'},
            update:{},
            create:{
                name:"Woopa4",
                username:"Ajolonauta 4",
                mainStack:"Node"
            }
        });
        const woopa5= await prisma.missioncommander.upsert({
            where: {name: 'Woopa5'},
            update:{},
            create:{
                name:"Woopa5",
                username:"Ajolonauta 5",
                mainStack:"Node"
            }
        });
    }catch(e){
        console.log(e);
        process.exit(e);
    }finally{
        await prisma.$disconnect();
    }
})();