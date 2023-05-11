import React from 'react';
import { useState, useEffect } from "react";

export function Component ()  {
  
  
    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://api.github.com/users/Euro47/repos" )
        ).json();
            
           let divka = document.createElement("div")
           divka.className ="divka"
           document.body.appendChild(divka)
        // set state when the data received
        const listo = data.map(item=> {
            
            let para = document.createElement("a")
            para.className = "lister"
          para.textContent = item.name
          para.href = item.svn_url
         divka.appendChild(para)
      
        
            console.log( item)})
            
            
      };
  
      dataFetch();
      
    });
    

    
  }