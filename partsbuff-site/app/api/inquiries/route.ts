import { NextResponse } from "next/server";
export async function POST(request: Request){const body=await request.json(); if(!body?.name||!body?.email||!body?.message){return NextResponse.json({ok:false,error:'Missing required fields'},{status:400});} console.log('PartsBuff inquiry:', body); return NextResponse.json({ok:true});}
