import React from 'react'
import { useEffect } from 'react';

export default function UseEffectAPI() {

const getUsers=async()=>{
  const response=await fetch('https://api.github.com/users');
  const data=await response.json();
  console.log(data);

}
useEffect(()=>{
  getUsers();
})
  return (
    <div>
      <h2>List of github Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <div class="card p-2">
            <div class="d-flex align-items-center">
              <div class="image"><img src="" class="rounded" width="155" /></div>
              <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0 textleft">Thapa</h4><span></span>
                <div><span>Article</span><span>38</span></div>
                <div><span>follower</span><span>200</span></div>
                <div><span>Rating</span><span>3.8</span></div>

              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}
