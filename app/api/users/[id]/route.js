import { NextRequest, NextResponse } from "next/server";

export async function GET(request, { params }) {
    console.log(params)
    return NextResponse.json({name:"INI USER",params:params.id});
}
