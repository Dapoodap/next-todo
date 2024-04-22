import { NextResponse } from "next/server";
import fs from 'fs';
import { changeTodo } from "@/app/controller/todoControl";

export async function GET(request,{params}) {
    const data = fs.readFileSync('./data.json');
    console.log(params.id)
    let parsedata = JSON.parse(data);
    const dataTodo = parsedata.filter(data => data.id == params.id);
    if (dataTodo.length) {
    return NextResponse.json({Message:"Sukses Ditemukan",data:dataTodo});
    }
    return NextResponse.json({Message:"Tidak Ditemukan",data:dataTodo});
}
export async function PUT(request,{params}) {
    const data = fs.readFileSync('./data.json');
    // console.log(params.id)
    let parsedata = JSON.parse(data);
    const {act,status} = await request.json();
    const index = parsedata.findIndex(data => data.id == params.id);
    const change = {act,status}
    
    if (index>=0) {
    changeTodo(change,index);
    return NextResponse.json({Message:"Sukses diubah"});
    }
    return NextResponse.json({Message:"Gagal Tidak Ditemukan"});
}
