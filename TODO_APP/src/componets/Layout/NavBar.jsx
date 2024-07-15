import { doSignOut } from "../../firebase/auth";
export default function NavBar() {
    return (
        <nav className="bg-yellow-500 p-4">
            <ul className="flex justify-between items-center text-white">
                <li className="font-bold text-lg">TODO APP</li>
                <div className="flex space-x-4">
                    <li className="hover:underline cursor-pointer">Profile</li>
                    <li className="hover:underline cursor-pointer">Signout</li>
                </div>
            </ul>
        </nav>
    );
}
