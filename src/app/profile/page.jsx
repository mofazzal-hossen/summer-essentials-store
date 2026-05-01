import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Avatar, Button, Card } from "@heroui/react";
import { FiEdit, FiMail, FiUser } from "react-icons/fi";

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/signIn");
    }

    const { user } = session;

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50/50">
            <div className="max-w-2xl mx-auto">
                <Card className="p-8 border-none shadow-2xl shadow-orange-500/5 rounded-[2.5rem] bg-white">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative group mb-8">
                            <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                            <Avatar 
                                src={user.image} 
                                name={user.name} 
                                className="w-40 h-40 text-5xl border-8 border-orange-500 shadow-xl relative z-10"
                            />
                        </div>
                        
                        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">{user.name}</h1>
                        <p className="text-gray-400 flex items-center justify-center gap-2 mb-10 font-medium">
                            <FiMail className="text-orange-500" /> {user.email}
                        </p>

                        <div className="w-full space-y-4 mb-10">
                             <div className="bg-gray-50/80 p-5 rounded-3xl flex items-center gap-5 text-left border border-gray-100/50">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-500">
                                    <FiUser size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Full Name</p>
                                    <p className="text-gray-800 font-bold text-lg">{user.name}</p>
                                </div>
                             </div>

                             <div className="bg-gray-50/80 p-5 rounded-3xl flex items-center gap-5 text-left border border-gray-100/50">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-500">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Email Address</p>
                                    <p className="text-gray-800 font-bold text-lg">{user.email}</p>
                                </div>
                             </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            <Link href="/profile/update" className="col-span-2 sm:col-span-1">
                                <Button className="w-full bg-orange-500 text-white font-black h-16 rounded-3xl shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all">
                                    <FiEdit size={20} /> Update Info
                                </Button>
                            </Link>
                            <Link href="/products" className="col-span-2 sm:col-span-1">
                                <Button variant="bordered" className="w-full border-2 border-gray-100 text-gray-900 font-black h-16 rounded-3xl hover:bg-gray-50 transition-all">
                                    Shop Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
