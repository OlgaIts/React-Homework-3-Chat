export interface Text {
    id: string
    from: { name: string }
    type: 'response' | 'message' | 'typing' 
    time: string
    text?: string
}