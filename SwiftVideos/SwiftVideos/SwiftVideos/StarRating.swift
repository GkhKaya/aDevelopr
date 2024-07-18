//
//  StarRating.swift
//  SwiftVideos
//
//  Created by Gokhan Kaya on 16.07.2024.
//

import SwiftUI

struct StarRating: View {
    @State private var rating = 0
    var body: some View {
        VStack{
            Text("Your Score: \(rating)")
                .font(.headline)
                .padding()
            
            HStack{
                ForEach(1..<6){index in
                    Image(systemName: index<=rating ? "star.fill": "star")
                        .resizable()
                        .frame(width: 30,height: 30)
                        .foregroundStyle(.yellow)
                        .onTapGesture {
                            self.rating = index
                        }
                }
            }
        }
    }
}

#Preview {
    StarRating()
}
