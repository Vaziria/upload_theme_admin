export const fieldTypes = [
    "field_title",
    "field_desc"
] as const

export const fieldLabels: { [key in FieldType]: string } = {
    field_title: "Nama Produk",
    field_desc: "Deskripsi Produk",
}

export type FieldType = typeof fieldTypes[number]