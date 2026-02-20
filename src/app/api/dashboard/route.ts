import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// هذا الملف يعمل على السيرفر فقط - آمن لاستخدام service_role key
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { action, ...data } = body

    switch (action) {
      // ===== CATEGORIES =====
      case 'insertCategory': {
        const { error, data: result } = await supabaseAdmin
          .from('categories')
          .insert(data.payload)
          .select()
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ data: result })
      }
      case 'updateCategory': {
        const { error, data: result } = await supabaseAdmin
          .from('categories')
          .update(data.payload)
          .eq('id', data.id)
          .select()
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ data: result })
      }
      case 'deleteCategory': {
        const { error } = await supabaseAdmin
          .from('categories')
          .delete()
          .eq('id', data.id)
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ success: true })
      }

      // ===== ITEMS =====
      case 'insertItem': {
        const { error, data: result } = await supabaseAdmin
          .from('items')
          .insert(data.payload)
          .select()
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ data: result })
      }
      case 'updateItem': {
        const { error, data: result } = await supabaseAdmin
          .from('items')
          .update(data.payload)
          .eq('id', data.id)
          .select()
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ data: result })
      }
      case 'deleteItem': {
        const { error } = await supabaseAdmin
          .from('items')
          .delete()
          .eq('id', data.id)
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ success: true })
      }

      // ===== RESTAURANTS =====
      case 'updateRestaurant': {
        const { error, data: result } = await supabaseAdmin
          .from('restaurants')
          .update(data.payload)
          .eq('id', data.id)
          .select()
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ data: result })
      }

      // ===== UPLOAD IMAGE =====
      case 'uploadImage': {
        // الصورة تأتي كـ base64
        const { base64, fileName, bucket } = data
        const base64Data = base64.split(',')[1]
        const buffer = Buffer.from(base64Data, 'base64')
        const contentType = base64.split(';')[0].split(':')[1]

        const { error } = await supabaseAdmin.storage
          .from(bucket)
          .upload(fileName, buffer, { contentType, upsert: true })
        if (error) return NextResponse.json({ error: error.message }, { status: 400 })

        const { data: urlData } = supabaseAdmin.storage.from(bucket).getPublicUrl(fileName)
        return NextResponse.json({ publicUrl: urlData.publicUrl })
      }

      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
    }
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
