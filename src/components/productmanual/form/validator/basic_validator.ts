import { Rule } from "antd/es/form";

export const requiredValidator: Rule = {
    required: true,
    message: "Kolom wajib diisi."
}

export const titleValidator: Rule = {
    min: 5,
    message: "Nama produkmu terlalu pendek. Mohon masukkan min. 5 karakter."
}
export const descValidator: Rule = {
    min: 20,
    message: "Deskripsi produkmu terlalu pendek. Mohon masukkan min. 20 karakter."
}
