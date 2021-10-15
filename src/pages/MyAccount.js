import React from "react"
import Input from "../components/Input.js"
import LogoutButton from '../components/LogoutButton'
import DeleteAccountButton from '../components/DeleteAccountButton'

function MyAccount() {
    return (
        <div className="my-account">
            <form className="change-password-f">
                <h1>Change Password</h1>
                <Input placeholder="New Password" type="password"/>
                <Input placeholder="Confirm Password" type="password"/>
                <button>
                    Submit
                </button>
            </form>
            <LogoutButton />
            <DeleteAccountButton />
        </div>
    )
}

export default MyAccount
