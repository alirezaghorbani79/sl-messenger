import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prisma from '@/libs/prismadb'

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { name, email, password } = body

        if (!email || !name || !password) {
            return new NextResponse('Missing information', { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,
            },
        })
        return NextResponse.json(user)
    } catch (error: any) {
        console.log(error)
        return new NextResponse('Internal error', { status: 500 })
    }
}
