import { NextRequest, NextResponse } from "next/server";
import createTodo from "@/app/model/todoModel";
import { saveTodo } from "@/app/controller/todoControl";
import fs from 'fs';
export async function GET(request) {
    const data = fs.readFileSync('./data.json');
    const parsedata = JSON.parse(data);
    const lastNumber = parsedata[parsedata.length-1]?.id || 0;
    console.log(lastNumber)
    return NextResponse.json(parsedata)
}
export async function POST(req,res) {
    const data = fs.readFileSync('./data.json');
    const parsedata = JSON.parse(data);
    let lastNumber = parsedata[parsedata.length-1]?.id || 0;
    let nextNumber = lastNumber+1; 
    const {act} = await req.json();
    console.log(req.query) 

    const newTodo = createTodo(nextNumber,act,false)
    saveTodo(newTodo)
    return NextResponse.json({Mesage:"Sukses",data:newTodo})
}
