"use client"
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { TbLogout } from "react-icons/tb";

export const LogoutButton = () => {
    const router = useRouter()

    const onLogout = () => {
        deleteCookie("token")
        router.refresh()
    }
    return (
        <span onClick={onLogout} className="flex">
            Logout
            <TbLogout size={"1.5em"} className="ml-2" />
        </span>
    )
}