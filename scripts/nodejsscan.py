import json
import core.scanner as njsscan

res_dir = njsscan.scan_dirs(['./src'])
print(json.dumps(res_dir, sort_keys=True, indent=4))
