  // using only loop print in the shown format: 

  let menuDesign = [
    {
      label: "Electronics",
      children: [
        {
          label: "Television",
          children: [
            { label: "Smart TV", children: null },
            { label: "IP TV", children: null },
          ],
        },
        {
          label: "Electrical Appliances",
          children: null
        }
      ],
    },
  ];

  // Electronics
  //    Television 
  //        Smart TV      
  //        IP TV      
  //    Electrical Appliances


  const printMenu = (menuChild, space=-1)=> {
    if(menuChild){
      space+=1;
      for(let menu of menuChild){
        console.log("\t".repeat(space)+menu.label);
        printMenu(menu.children, space);
      }
    }
  }

  printMenu(menuDesign);