import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// const foodLike = [{
//   id: 1,
//   name: 'kimchi',
//   image: 'ref',
//   rating: 4.9
// },
// {
//   id: 2,
//   name: 'ramen',
//   image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQDw8PEBAVEBUVEBAPEBAQEBUQFRUWFhUVFRYYHTQgGBolGxUVITEhJSkrLi4uFx8zODMtOCgtLisBCgoKDg0OGhAQGzAlHyUtLS0vLS8tLSstLS4tKystLy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAABAgMEBQAG/8QAORAAAgIBAwMDAwEGBQQCAwAAAQIAAxEEEiEFEzEiQVEGYXGBFCMyQrHBFWKRodEWUnLwM4IkQ1P/xAAZAQEBAQEBAQAAAAAAAAAAAAABAAIDBAX/xAAuEQACAgEDAgMGBwEAAAAAAAAAAQIRAxIhMSJBE1FhBDKxweHwUmJxgZGh8UL/2gAMAwEAAhEDEQA/APAIPP4jIBkZzjPOPOPtOQefxLXTHrW6prVDVCxTYpzgpn1ePtPQfPNEdYTfqLNrkvpzTSCV2qrKEYt+m4gD3P2mNie0anpHqWp029psW3d4MLNxA9C43ZABHPG4cHkTB6ZpKc/vXrbNYZV7nbAbcAVZiOCFyfvxNLrZnbHFJcIysTsT1Gm6XomupRbCVN9asTYvrR2sGMYyv8Kc+2+ZtC12v2Xp7Lm19zqW9Hk9sIxxxgjk5lJaeSU7V0ZQEOJv6r6cCK7LdkKSB+7PtjOdpOM844OcHxINR0NlNoD5KIHUFQGdCGJZQGPA2H7j3AwccVmg+GHiR8zHxOxNq36etXeTZVtVNxY9zH/7AQcLwQanHOOcDycSLU9HNGRqLBW2wlAFZ9zLkFD8HIAz454Jmo5IydJh4sfMysTsRgJY1eisqIFiFSc45Bzjz4mrV0dkm1dcFXE4EjwSPxxLb9PuVWZqbVVQCxZGGAeATn2kVWnZ1dhjagBYkgeTgfk5jTMykkrYi6hx4scc54Zhz8/mPpdbZVZ3VObOfU/qOSMZ595CRAYUipD6vVNYEBAAQYGByc+ST7mVsSQiLFuwjFRVIQiKRHgMjQmIMRjBIRYI0EhsWdDBARSIMR4MSITE4xoCJCJBGgMBsUxTHgMBFnTp0hNdB/SMg5E5B/SMo5E2eYGJuU/TzXDTnTkk2UvY4sGNnbfY2NuSRnGOM8zFxNJOs6pQgFr7UBCAqpUKRgryOQR7HIkjUWu43U+hPpkVrHq3F3Rqw3rVkba3/l58iV10V1tdl/8AGqnNjGxTYOQNxUncRlhzj3j2am96iG9VXdJz209Nr8na2Mrnb4GAcSSnq2orpfShsVMWDoUUtk7dwyRkcov+kmVxvYpVaSxlZ1rsKL/E6oxUY55IGB8yxpdLqbVsapNRYnAtNa2OvAyN+PtnzBTdaivWuQCD3FKKxAxhs5GV4/EvdF61fpVdakRlZldtysxGw5HgjA+YNA6INF1LVYsCF7QU9e4NdhVDAHnwBvbzxzIbKdRbkvvYpWW/eHDdtfJG7lsfr4k2i6l2t22qshqgjKS20kD+Nhnlvf2+2Jf1fX1dyTU7J27E9Vu1s21qjnwQAAvAH5+01HHjW/c4PUntEytatj7C1e0CldoQHHaBwGPPufcx9WdTeEZ0dhhnQrWQCpOGbgcjK4z9peq66F2gLeo/Z+y5W/1EB96sDt4IJIwc8GQdS6juFDU2OjDSpTagyoHb9PBHlWGGx8kxlGDafIwnljFwiq+H7g/x3VOLMkOzVdsuKl3LUTlgNowM/JGfxKmn1ASu6pww3hSuAMh1IIzn2Mio1Nle7tuV3LtbHuvwZe6/qEsOn2uLHXS1pbYM+qwbjjJ8kKVXP+WWqhnFzemXGzXntv8AEyMQYjQTJ1FikRzFMiEIimSGIZEIRAYxgMiFMEJgkIMQYjQGQizoYICCAxoJCJBGMBkIsBjGLMihYZ06Qmyg5hUQ1+YRNnnOI5M9BpuuIiVo1TOFQrhnG05HGVxgjz9/bMwiOT+Y5H9v6TUZuPBzy4IZVUzZs6yrYOxxsvR6gCuBWqhdhPscD28k/aF+q1szs3cJa7czGqks1XHoJJ9GPVgjzkeIvT+m1WV1szkF7djMHrVahlQCynls5Px4ly7oVWLCHZdtaNh3rIV2zkMwGMj08ceTgkjB31Pc4pYY9K+/v6kVvVK7U1WMVW2UrltoQOy3NY9fp/7lK4J8msA+Zb1Os0rpcukPaZtEyMbOzpi7DUUuF9OFLbA4PucY5mT1zp6aewIjs/HJKlR5IBHyDjP9zOq01d5PbSxNlQLKgN9jtuVSUUkf92TzwAZyltbZ3i0oquDU6brqn1FXbIrXtXC0swqHbarArYkgNhvAGfY8nMg0zoV0nKnUfsl6hgy8HDDTh/8APjcB4IzX8YiVfTwIVmuKgqpz2cgluyAa/V61zcAW4wVPEav6YLEDvDO0GzKY25UMNuW9Xv8AHgzhDJjxqrLPljltvv6eh53bBib1fQBvVLLiC1djA11O6+gOQA3g57Z48/r4pDTUv20rewWEt3C6HZxkjaFy3OPidYSU9kDzR+0ZuIDGgImjqJFMcxTIBYpjQGQiGKY5iyIUxcRzFMSEIgIjGDECFnQzpCKYpjmKZGgQQwQEEUxjAZEKYIYIGkLOjToCbdY5EIENY5EIE2edBI5Mc/2gbzGI8fiQnY8S1pNEbFtcFQK03HOMnJAAA8+T58D3lf2EsaPVNXuwAVddlikA5XIbjI4OQOftFV3CV1sXm+n7FGXZU/cta4YP6UXGMnGCSWUYGf4hIdN0Wx8F9tdZqssFjHeu2tA7D0ZIbaQcHnmSV9SY22MKty2U9lqQST2lVQuGx/EuxWzjyvjHEtVdfvdUW2s21LW9IFY7bfvaezw2CA2ApxjkjxyZP0Bcb8mboultY9Cb60Nzba2JJAYkABtoJHJH4zziNpunWt2GRwO7YyKwZhssXGQ/uDtYHjPDfkCXp2vKWacmneKbRYq15WxmUhsE4Puozx7e0fTdWapadtZCLqHtf1HFjMFUpnHACcY5/jJPkCYjf/QZfyeX9mWLnGNtjYViUKs4AP8A3L8E/oYi2sG3hmD5J3hiGyfJz5zC4GTtztzxkgnHtk+5imaqjVIjIikSRhFxnx5kJGYpky1Mx2qrFvgAk8faIKmOcKTgZOATge5kREYDHKH4PHng+/iK6keQR+eOJEIYuIxgkQsUxzEMSFMBjQGRC4ghgMBBBDBIRTBGMEhBBDBARTBCRAYMUCGCGBo3U8iMBAntGmzzjN5hPt+JxEYjx+JED2EPt+sOOB+T/aEDj9f+ZEW+k6larCXztNbqSEV2BZCFYZ8EEg8EHia+m6mlT6Wreiolb7ra1/gvsWxVs487d1bHGeV+RPOjwZf6F05dVb2mtFWUZg7fwgqNx3fbaGP6RvajLgnKy9oOo0VPomy1ZosVru3RWzOUd2LC7cGYMpVdp4Hn25l0PUdGiVJbvtVNTa+39nrA2WJtUnLeohgrYbPjHgQdV+mxTWTXY1ji8VEEBE3HI9DHh/UD4PHuB5kPT+hJYil7DW3f7dm7ARRnHpPh2zxgHjzjHMktXASaXJp1/UOiret69Mi7LlfI09Ib/wCYl8En/wDkTgeAcYxgYzNXq9G2n7R5u/aA3eq0lNJNR/iyAeMDwqkD5+ZY/wCnqM7f2hw27+ZVUAbqlK4bB3fvfcAen78J1HQ0U1tYKd4GpoR1NhylZ062MpKny7lxn22ECLg0rZz1xb2I9L1PSiuqu1SwrztftIWx3LDznPGGXjnnMtaPquhW+h1XthdSzZ7SjajBgrN87WKnA448Shpum03hbAWqVrthVXQrUoC4DFzklySAfA95ZP0/pR51DggbmXdTkDAyn/mCcZ8cGc5+2RXS/gcdONSvey/0nqGiRKKw4XWDvrdqSAindVcue7/MCxQgnn8TO6Braxdp916rsquS4t6FKlDgZ8Nzj8wn6d0uEP7STucjaCmcbSwTPgNwOTxzI9N0XS2irLPUcWiwmytjvRuFwPfHP6Tg80HT32+p6Ye0RjFxXf8A0kXqFHaUWWI5/wANKWgeWt3HsqP8y+5mB15w9oZWBU1rgA5xgeDNTqGm0umqrKqL2bcCxcZ8Ag4HjHIidW6XWEWxUKMdIljoCMK+SCTn5AzierFPXDp7/Kzz6oqayO1W3be6+Z5sxTGMED2imKY5imJCxTGgkQpgMMBgIJ2IVEYwbNRRGVimSmRuJJmmhYIYJAAxDGMWQoE6dOmRPQLHxFWSHyZs4Bb/AIhPgQN/aN7CRBxx+sIHB/I/vB7frCPBkRw9/wAf3EfTaV7TtrUu21m2jk4UFmwPfgEwVqScAEkjgAEn5k/TtZZp7VupIDrnaSMj1AqePwTEg6npN1SdyyvYpwBuZFY5VW4XO48OhOBxu5xDpOlPbXvrwzG+ulawV3lrA5XjPA9GOeDk88GWtZ1/U2i1bGX946tb6FBZq9oXP42L/v8AJETS9U1KC1qlUDurc7rRX6LFb0MDt9ABJAHj1Ee8DLbK+v6W9ViVZR2dK2XtsrKe4oYAMDg+cZBxIrNLdW/YbNbOVDIWAU5Pp3YOMZ558Q6vqNtti2MwDqFVDWq1BVThAoQALjAxj4iHX3GxbjbY1qsrLY7F3BU5U5b4Ika7Gjr/AKdbT1u2obZYLq61UKHQrYhs3lwcgbVPgE5EgfoyirUt3P3lFtSkbQK2S0lQ27ORgj4j6r6hvuR0u2Wsz1uthUKyNUGVdqphcYdhgg+ZCOtWbLVZUc2tUXdgQ2Km3Ko2kDGftn7zK1avT/PqT9x+dmZfVtZlJU4JGVOVODjIPuJERLGqva13sbG5mLHAwMn4EhM0wjelauSIiM1zHOWY5AByxOQPAM4xDIaFIimOYsSFMUxjFMhFMEYiKZEKYDGMUwIKQxIwaDOkWcYjxyZExgjTYIJ04xMimLGMWQoE6CdMieiWSHyZGI58zZwGPt+IfYfkwH2/EPt+sSD7frGX3/8AfeKPH6iFff8AH95AW+kuRfSQwTFincWCgAEEkknHibB6jpFxtq5/adznYGPbFu4FHJyPSAMeOT+R55f7H+ks9L0ouuqqLbA9ipuxnBY4Bx+SIp0ZlDUzTo6hplD9xGu3ahbCTTWrMu5WdWYuSAQG4GOSOeSIuv6jVdXqFASsk0tXio1l+2HUqVVmAPrJzn28+0u676YWmu0m7fYlQf0DFXJfw+ME4C+k4Pq4z4lHQ9OBr1a2Kodaq2RzZWQuXrY7QD6mNZY8H+UjGTwajDhFO2YREWbv1Po6KWpSgqQK2DsttdxYi60K7FOASmw49gQJR6vTp0ZRprWtXb6iwYYbPjlF9sfMDqntZnGAz3Gu0ulSjVjQOlhOlrNmwlwNt+HI3EkA1kE8+3geJQ0rqV1ux6u23Tx3FTCp31ZNuAcZOQ2MfMxq3o0l0uXlR5QxTHMQzZCGKY5iGQCmKYximJAimOqkkAAknwBFZSCQQc+4kIhimWa9HYwyqMefic3T7QAe23PtjmBFUxTLa9PtJClCCfmG/ptqclePmIWuClBLR0L9vuY9MfT9MssQuo9ImU0+DcouPJRMUzT0PSjbnnGJF/h57oQ+D4P6Zldi1VX3KEBm71DogqTdu549/mNpujL2t7EEn/jMmS3dHnjFM9BZ01NnGM8f7jMr9L6ej53kQ7WPDoxp09ONBQPgf6ToGiESRvMjEkM6HAY+0I8frB7CEeP1kQyjgxl9/wARVPBhU+fxIhlH9D/ScozwOc+0CHmGqwqwZTgggg/BHIMiNBuj2KLt+1HqQO1Z5cqXFZxtyAQzDIJB8yf/AKc1DMy1KLNtVdjFWTGLE3gKd2GPDYwedshfrTk3N26FNy7bdtfBy28nk8Etg5/yic/XryCN1YBRUKimjbsQEIMbfIBIB8jJgBYt+mbEFputor2Vl+WZwcWJWy+gHBBdc/8AkB84z+p9Js0/b3FXFlfcU1h2ULgE+ortbGRnaSB8yU9a1Jbd3m3eseF8Pt3gjGCDsU//AFEdf2y/Z67CprtRC1mxBUihrQTnAXbjOeD95GW2u5LV9MO43d6nb21ffn0bicbc/I9/iF+i1Kt9mbbFTRpagKdvL2mtQwP8yqbCT+AJWajWHtkNa5eo7AlrOwqAUkEA5VcMvBg0mg1wANaXANUwHOAaXADLgnGDuHH3H2mpzhFVwcItvdzRtdW+lk0VF7P++c0Usm70NWzXdt/4WIPBGDyJS/wuvt65RSPTp6ramJLOjF0Vhuz75PErabpHUFDitXUPV+8AsXDV8HaefPIOPvEp6VeiXKNQlZArNlK2nLF29CsF4yCRwfkTz+JG71HfxYKDj323M6rS9vUJXdgYdQwGGHOD/cT0uj0+krspdzQHOptXUi18BK+QgFeMEEYO6UbPpixO6+osGEQsShLsSOWB+MAHzKOo0FL6e6+p7Ca7kUmz+ZHHH6g/7TvHJCcXp8zzR3yJt3009trv72NvT/4bsqGoetiqWrtrJ/i3+gn8iQ6nqPTu3alNdaFkGCyl+VI/3PM8gYpgevSjSqvrGpDjGz5xtAJXE9FZ17R1oq9tbH2nLAe+TPFGIZpytUZWJKWr0o9ZZ9T0AkpVtPHAHEjT6qrXxXk5J5A+/wDzPKmKZk3SN/VfUnccMUx+APBGJF1D6hNi7AvA8GYZgM1qdUHhxu6L+m6qyp22GVxGq6wyVNWoxkn/AEJyZmQGYSrg6tuXJao6g6EkHz5gv6gzEHwQf6DEqGdIuass6jqFjjDNxFXqFgXbu49pWMUyEnOtfGMyHvNzgkZ+OIpimBpIY2t/3H/WdI8zoCejEkMiElPt+Js843sIR4/WL7D8wjwZEMvg/wDvvCv9j/SKp8/iFP8An+kiCnkfmPS+GUkBgGBKnwQDnB+0QS71XSrU67M7GqrdQzBmAdASGwB4OfYZGDEG96PRajqnTFLLTQwQpYCTTW9u9iNpRnPoGBnkHG4gYmL0vXU0MTtsYNTtccA7ycnYwIKrgDnn3BBEyszswTopRUuT0o+qdor7dRQqiKdthA9L0swHHCsKiNvj1n75gX6hU7UephX2rKrNr7m22VV15rBGFx2kbb4Jz88YBMUmac21Rnworcn0WrNW/wBCOrpsdH3bSNysP4SD/EoPmXP+ob8ADtjBQkhOWavt7WbJ5OKkH4EyjBOThF7tC8cW7aNA9d1OGHcGGGGGxMH0qvx5wiyB+ragkk2tkpsJwoJQex458Dk8yqYpkscV2RLHHyJ7upXtuDXWHcMN6jhgPn5kJ1T9vtbj2y+4r7FsYBMjMUzaSXBqkhTFMYxTERTFMcxDARTFMJimICmKYTAYCCAwxTIUCCdOMDQDEhJgkIDFMJMUzJpHZgnQSE9GJIT4/EiEcnxNnmJM8frGX3iA8frCp8yIdff8Qp5ERT/QzhIie6l62KOpVl/iU+3Gf9MESzqq77bADWzP20KpUm7FWwbPSvgbcTUt+oVr7qVLuLVVIL68ISUq2NkMuWGSfj+EfmUv8bAdnWhctUtbq7l6ztVVGVxjHoU4+R5m2l5nJSm96K2n6dYxTcpRGDEWMrbdqqXYj59I/XiUyZp/49YWrLjKrWa2RGdQ6GsVkEEkA4A8DHHiZroQA+1ghJCsQcErjI3YwSMjP5+8y67G46r3FzATGvqZGZXUqynDKwwQfgj2h01DWsEQbmIOBkc4BJ/2BmW0lbNpN7IjzBmXx0e7fsIUepVLF12gsARnnPv/AK8SO7pzrWLAyMD5CsGIO4qMY8jI8/eZWWHZnR4ZpNtcFIxTNjRdCNoqPdRTYCQmGLhFLAsfbgr8+80KPpVQ69y0thvWirjIywwCT/lP6T0RwzlwjxT9qxR2bPKmKTPXf4Bo1yXtYDnA7iAH8e+BnHPxG1WnoUWKBUdMenAo/p3m8Hg587t+f0lPFKHI4/aI5PdTPGkxlodhlUYj2IUkZ/M3+m6vS1I1dhSwb1cN2iSeOR+QZbf6l06Y2K3DcbVCgAjkzccUatyMvPO+mD+B5anRWPnajcDJ4I4klXSNQ5wKmHjkjAGZsN9TgN/AxQJtAJA5z5OIyfVo2ENWd2RtweMD5hoxfiNa834f7MXW9IetQ2Qw3lTjyGEuUfTbEZdsHgjbyMGQ6rrrEYRAoLlj75Jld+uagjG/2+JiDiveOslN+6aQ+l8k5swP0/vE1/Rq1yqYzt4OfeY1nUbm82NIn1lhIJdiR45mcml+6qOmLVFty3LmhoRWdbMZEsdUarsDbjdx4+c/8TDZieTyYCZy072dtfQo0AxSYSYMH4mjAsBjpWzcKCfxDfpnQZYYgJDFJlujp1jjIHH3lpOhMfLY+eIGjIzOly7RbWIz4+4nSotSNXMkzwJCJJngTZ5xweP1jKfP4iL4jL/aQjL/AO/6QqeR+YqnmAGRDZnqNMuiP7O2pajjSYZUOF7wuJHc7HIJqI585HPIxPKsfM3qvpPUnabGpqRyvbex8K++trBswOThcY+SPzKzUf0IeraumyqgVCtSgZWQVkWY7ljKxsI9Q2sv3z7CT9P6tTXVQrCw2VtecpVUpUXVhFKuWyzIw3jI8nHGMyn03ppOqqptSzYdR2nxW/JVsMuMgj78ggEy/qOipTpLrLA3eDgLuIUJi81sm3OSxUBjnwGX5zCwbsp6zrBbVvq612kuWVXYtjIwclcE+/jEqW9RdrmuJHcbdnG7jcpXIyc5wfmMEo7BYu/7Rn0oM7cZHJ9GPGf5pf6Nq9MtATUspA1tNpqC2s71qrq4PGwj1qQCQeGHuJNbUFuNNFOzrF+0IWAwUOdvqym0qST5PpBz7yv/AIjbwQ+3BBAQKgBDbhgAcc8zR67rabu46OCf/wAdQOylRbtUCt3AH/xrlRhQcc+OJhZgscY8IVmnkTUm/InbWWZB7j5Gdp3EEbiScfGSTIntY+WY/kkyPMdaXKlwpKghSwHG4+B+Zu2zHTH0IzATNDTdE1Fva2pxY7IhJH8SDLBgOV4+RG0v07q7QrJS21gSrkqqkD7kwsbRlmIZrdR6I9Bw1tLHsizCsSQD/KePM7ovTEvGGJBaxUBHlc+TiaSbMyyxj/KX8mOxkZM9m/0zpKyA+oJ5IPIH6ED/AN4kTNpK0APZLdvAPnDA8HmZs3Z5BuOCMH4MXB4+/ieyPWNFWSdosbj+XjM8/wBT6iljKyLjDBseBxJE7K79MuH8mR7kEYEGk6a9m/HG3z+Zp6j6i9JRFyDySeJk09RsQsVIGTkj2hP8pvC1dzQ/T+mtc7JnaQMnIkiaBBbsduOcnj2kA6nYHZ1wCRj9BKb2knJJJ+YNWjUHTTZsdU0CYyhAx/xmWdHfp0qUtjdtHuPjn/eede5iMEnHxIjJglya+h19ddjsRwSCPf5/5h6h1RLBgD2GOJjGKTKx0po0qusMqhQo4kdnV7T7gTPgMDdEjXsTnM6RToWNI3wZKDwJ06dDzIYHgzlP9IZ0hAh5EGZ06QBY8n8zX0XU9fe1VFN1xYACpFsFeAqFRg5GPTkeYZ0HwK5KRquKCwsSDcycuS3dIBY/qCOZa0f0/qbeVrG0WitnL14VywXkZyeSPAnToN7k0dr+h2ULa72Vba7u1wXy9mASFG32DAnJH2zF6X0g6hGZXwVdFK7c4DsBuJJHHPtk/jzOnTpjSbpnLLJxi2i3qukUpVdsNlrVtWTYGFYRGD7sqR6sFPb5H3zp2aTTq+uW9K66U1lIUIH3nTo3KjaOCaiGJ4JJOZ06byRSao4YpOS39PkZH1Iabib6XTaqUVAV1ulZda8PtDeoAYGM+cyDo3Vk06oxUM9d+8J6hvUoVPq8AjOQZ06D6ePI1CHiWpdpbftRLV9TCvZtoLMmpa9Xuud2LFduGxjPAHP2ij6l1d2yqvaNoIRVGMKDuxycce06dOZ3pIg3a3UV9zflFRx5UHYvLD595mrqLtPwCU3ANxg8HwZ06K4sw31qNclOywsSSSSTk5+YhME6B2AYpMM6QoSAmdOgaFJikzp0BFJgM6dA0KYpM6dIRSYCYZ0DQmZ06dIj/9k=',
//   rating: 5.0

// },
// {
//   id: 3,
//   name: 'hamburger',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
//   rating: 4.1


// }]

// function Lim({ name, image, rating }) {
//   return <div> <h3> Lim loves {name} </h3>
//     <h3>{rating}/5.0</h3>
//     <img src={image} alt='img' />
//   </div>;
// }
// Lim.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   // isRequired를 지워도 작동은 한다 => undefined로 나올 뿐
//   rating: PropTypes.number.isRequired
//   // rating의 propTypes가 string으로 돼있으면 콘솔창에 에러가 발생
// };

// // father component
// function App() {
//   return (
//     <div>
//       {/* dish is object, dish는 각각의 아이템이야 */} {/* foodLike라는 object에 map함수 적용 */}
//       {foodLike.map(dish => <Lim key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />)}


//       {/* <Lim fav='develop' />
//       <Lim fav='eunsoo' />
//       <Lim fav='Apple' /> */}
//     </div>);

// }

// export default App;



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import './App.css';



import MyName from './MyName.js';
import Change from './Change.js';
// class App extends Component {
//   render() {
//     return (

//       <Fragment>
//         {/* defaultProps */}
//         {/* <MyName> // name이라는 props를 보여주도록 설정 */}

//         <MyName name='자바스'></MyName>
//       </Fragment>


//     )
//   }
// }
// export default App;

/////////////////////////////
/////////////////////////////

// import Counter from './counter.js';

// class App extends Component {
//   render() {
//     return (
//       <Counter />
//     )
//   }
// }
// export default App;
import Counter from './counter.js';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter></Counter>
      </div>
    )
  }
}
export default App;
