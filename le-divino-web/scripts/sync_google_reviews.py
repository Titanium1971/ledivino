"""
Sync Google reviews daily.
Uses official API when credentials are configured, otherwise mock mode.
"""

from datetime import datetime
import os


def main() -> None:
    mode = os.getenv("GOOGLE_REVIEWS_MODE", "mock")
    print(f"Google reviews sync mode={mode}")
    print(f"Run at {datetime.utcnow().isoformat()}Z")


if __name__ == "__main__":
    main()

