import "server-only";
import { db } from "@/lib/db";
import type { Part, Vehicle } from "@/lib/types";

const vehicleSelect = `
 SELECT v.id::integer, v.slug, v.year, v.make, v.model,
 COALESCE(v.trim, '') AS trim, v.mileage, v.price::float8 AS price,
 v.status, v.stock, COALESCE(v.vin, '') AS vin,
 COALESCE(v.engine, '') AS engine, COALESCE(v.transmission, '') AS transmission,
 COALESCE(v.drivetrain, '') AS drivetrain, COALESCE(v.color, '') AS color,
 COALESCE(v.location, '') AS location, COALESCE(v.description, '') AS description,
 v.highlights,
 COALESCE((SELECT image_url FROM vehicle_images WHERE vehicle_id = v.id
 ORDER BY position, id LIMIT 1), '/vehicle-placeholder.svg') AS image
 FROM vehicles v
`;

export async function getVehicles(): Promise<Vehicle[]> {
  const { rows } = await db.query<Vehicle>(vehicleSelect + " ORDER BY v.created_at DESC, v.id DESC");
  return rows;
}
export async function getVehicle(slug: string): Promise<Vehicle | undefined> {
  const { rows } = await db.query<Vehicle>(vehicleSelect + " WHERE v.slug = $1", [slug]);
  return rows[0];
}
export async function getParts(): Promise<Part[]> {
  const { rows } = await db.query<Part>(`
    SELECT p.id::integer, p.name, COALESCE(p.category, '') AS category,
    COALESCE(p.condition, '') AS condition, p.price::float8 AS price, p.stock,
    COALESCE(NULLIF(concat_ws(' ', v.year, v.make, v.model), ''), 'Ask about fitment') AS vehicle
    FROM parts p LEFT JOIN vehicles v ON v.id = p.vehicle_id
    WHERE p.status = 'Available' ORDER BY p.created_at DESC, p.id DESC
  `);
  return rows;
}
