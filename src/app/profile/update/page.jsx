"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Input, Label, Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiCamera, FiUser, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function UpdateProfilePage() {
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        // Better Auth update user method
        const { data, error } = await authClient.updateUser({
            name,
            image,
        });

        if (!error) {
            router.push('/profile');
        } else {
            alert(error.message || "Failed to update profile");
        }
    };

    if (!session) return null;

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50/50">
            <div className="max-w-lg mx-auto">
                <Link href="/profile" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 font-bold mb-8 transition-colors group">
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Profile
                </Link>

                <Card className="p-10 border-none shadow-2xl shadow-orange-500/5 rounded-[2.5rem] bg-white">
                    <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Update <span className="text-orange-500">Info</span></h1>
                    <p className="text-gray-400 font-medium mb-10">Keep your summer profile fresh and up to date.</p>

                    <Form className="space-y-8" onSubmit={onSubmit}>
                        <div className="space-y-2">
                            <Label className="text-[10px] text-gray-400 uppercase font-black tracking-widest ml-1">Full Name</Label>
                            <Input 
                                name="name" 
                                defaultValue={user?.name} 
                                placeholder="Enter your name"
                                startContent={<FiUser className="text-orange-500" />}
                                classNames={{
                                    inputWrapper: "h-16 rounded-2xl border-2 border-gray-50 bg-gray-50/50 hover:bg-white focus-within:bg-white transition-all px-6",
                                    input: "font-bold text-gray-800 placeholder:text-gray-300"
                                }}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[10px] text-gray-400 uppercase font-black tracking-widest ml-1">Photo URL</Label>
                            <Input 
                                name="image" 
                                defaultValue={user?.image} 
                                placeholder="https://..."
                                startContent={<FiCamera className="text-orange-500" />}
                                classNames={{
                                    inputWrapper: "h-16 rounded-2xl border-2 border-gray-50 bg-gray-50/50 hover:bg-white focus-within:bg-white transition-all px-6",
                                    input: "font-bold text-gray-800 placeholder:text-gray-300"
                                }}
                            />
                        </div>

                        <Button type="submit" className="w-full bg-orange-500 text-white font-black h-16 rounded-3xl shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all mt-4">
                            Update Information
                        </Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
}
