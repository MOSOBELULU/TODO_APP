import { doSignOut } from "../../firebase/auth";
export default function NavBar() {

    const handleSignOut = () => {
        doSignOut()
            .then(() => {
                console.log("User signed out successfully");
                // Redirect to login page or handle post-signout logic
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <nav className="bg-yellow-500 p-4">
            <ul className="flex justify-between items-center text-white">
                <li className="font-bold text-lg">TODO APP</li>
                <div className="flex space-x-4">
                    <li className="hover:underline cursor-pointer">Profile</li>
                    <li className="hover:underline cursor-pointer" onClick={handleSignOut}>Signout</li>
                </div>
            </ul>
        </nav>
    );
}
