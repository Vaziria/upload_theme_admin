import React from "react"
import { Input, message } from "antd"

import { debounce } from "../../utils/debounce"
import { Akun } from "../../model/newapisdk"

interface Props {
    akuns: Akun[]
    onChange: (akuns: Akun[]) => void
}

const AkunTextareaNew: React.FC<Props> = (props: Props) => {

    function createAccount(username: string, pass: string, namespace: string): Akun {
        return {
            _id: "",
            name: username,
            user: username,
            pass: pass,
            password: pass,
            namespace: namespace,
            active: false,
            limit_upload: 0,
            count_upload: 0,
            water: "",
            shopee_categ: [],
            tokped_categ: [],
            type: "",
            markup: "",
            hastag: "",
            last_up: 0,
            polatitle: "",
            is_running_upload: false
        }
    }

    const onSearchChange = (value: string) => {
        const akuns: Akun[] = []
        if (value !== "") {
            value.split("\n").forEach((name, index) => {
                const [user, pass, namespace] = name.split("|")
                if (!name || !pass) {
                    message.warning(`invalid line ${index + 1}: ${name}`)
                }

                akuns.push(createAccount(user, pass, namespace || ""))
            })
        }

        props.onChange(akuns)
    }
    const onSearchChangeDebounce = debounce(onSearchChange, 300)

    return <Input.TextArea
        rows={8}
        placeholder="username|password|[optional: namespace]"
        onChange={(v) => onSearchChangeDebounce(v.target.value)}
    />
}

export default AkunTextareaNew
