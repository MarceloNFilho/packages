import { colors } from "@ignite-ui/tokens";
import '@ignite-ui/react/dist/index.css'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} className={`bg-${color} p-8`}>
        <div className="flex justify-between font-mono">
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}